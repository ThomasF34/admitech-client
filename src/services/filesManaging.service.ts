import axios from 'axios';
import * as API_URL from './configApi.service';
import { resolve } from 'dns';
// Perform the upload
const handleUpload = async (file: File): Promise<string> => {

  // Split the filename to get the name and type
  let fileParts = file.name.split('.');
  let fileName = fileParts[0];
  let fileType = fileParts[1];

  console.log("Preparing the upload");

  let url: string = '';
  
   axios.post(`${API_URL}/sign_s3`, {
    fileName: fileName,
    fileType: fileType
  }).then(response => {
    const returnData = response.data.data.returnData;
    const signedRequest = returnData.signedRequest;
     url = returnData.url;

    console.log("Recieved a signed request " + signedRequest);
    // Put the fileType in the headers for the upload
    const options = {
      headers: {
        'Content-Type': fileType
      }
    };
    axios.put(signedRequest, file, options)
      .then(result => {
        console.log("Response from s3")
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    
  }).catch(error => {
    alert(JSON.stringify(error));
  })

  return url;
}

export { handleUpload };