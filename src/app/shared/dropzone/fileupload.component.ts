import { Component,Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import {BackendService} from "../../services/backend.service";
import {Observable,of} from "rxjs";

@Component({
  selector: 'fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent {
  @Input() fileUrl: string;
  @Input() docId: string;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  error: boolean = false;

  constructor(private _storage: AngularFireStorage, private _backEndService: BackendService) {

    // this.fileUrl="";
    // this.docId="";
    // this.percentage = of(0);
    // this.snapshot = of(0);
    // this.downloadURL = of("");
    //this.task = this._storage.upload('', null);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: any) {
    const file = event.target.files[0];//event.item(0);
    if (file && file.type.split('/')[0] !== 'image') {
      this.error = true;
      console.log('unsupporterd file type');
      return;
    } else {
      this.error = false;
    }
    //const filePath = 'estore/' + localStorage.getItem('center') + '/' + this.fileUrl + '/' + new Date().getTime();
    const filePath = 'itanistore/' + this.fileUrl + '/' + new Date().getTime();
    console.log("filePath>> "+filePath);
    const fileRef = this._storage.ref(filePath);
    console.log("fileRef>> "+fileRef);
    //const task = this._storage.upload(filePath, file);
    //this.percentage = task.percentageChanges();
    /**
     this.snapshot = task.snapshotChanges().pipe(
     finalize(() => {
                this.downloadURL = fileRef.getDownloadURL();
                //this._backEndService.setProductPic(this.downloadURL, this.fileUrl, this.docId);
             })
     ).subscribe();
     */

    this.task = this._storage.upload(filePath, file);
    this.percentage = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        //this.downloadURL = fileRef.getDownloadURL();
        return this._backEndService.setProductPic(filePath, this.fileUrl, this.docId);
      })
    ).subscribe();

    /**
     tap(snap => {
                if (snap.bytesTransferred === snap.totalBytes) {
                    console.log(snap.downloadURL)
                    this._backEndService.setProductPic(snap.downloadURL, this.fileUrl, this.docId);
                    // Update firestore on completion
                    //this.db.collection('photos').add( { path, size: snap.totalBytes })
                }
            })
     */
//        );

    //this.downloadURL = this.task.downloadURL();
    //this.downloadURL = snap.downloadURL();
    //console.log(path);
    //console.log(this.downloadURL);
  }
  /**
   * startUpload(event: FileList) {
        const file = event.item(0);
        if (file.type.split('/')[0] !== 'image') {
            this.error = true;
            console.log('unsupporterd file type');
            return;
        } else {
            this.error = false;
        }
        const path = this._eCRMFSService.getMemberType().company + '/' + this.fileUrl + '/' + new Date().getTime();
        //        const customMetaData = { app: 'ercm' }; //metadata is not working
        this.task = this._storage.upload(path, file);
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(
            tap(snap => {
                if (snap.bytesTransferred === snap.totalBytes) {
                    this._eCRMFSService.setAttendance(snap.downloadURL, this.fileUrl, this.docId);
                    // Update firestore on completion
                    //this.db.collection('photos').add( { path, size: snap.totalBytes })
                }
            })
        );
        this.downloadURL = this.task.downloadURL();
        //console.log(path);
        //console.log(this.downloadURL);
    }
   */

  isActive(snapshot:any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
