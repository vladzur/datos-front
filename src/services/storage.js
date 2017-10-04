import * as firebase from 'firebase'
let file = new File()
let storageRef = firebase.storage().ref()

let metadata = {
  contentType: 'image/jpeg'
}

let uploadTask = storageRef.child('images/' + file.name).put(file, metadata)

uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  console.log('Upload is ' + progress + '% done')
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused')
      break
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running')
      break
  }
}, (error) => {
  console.log(error.code)
}, () => {
  // Upload completed successfully, now we can get the download URL
  let downloadURL = uploadTask.snapshot.downloadURL
  console.log(downloadURL)
})
