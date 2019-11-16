import axios from 'axios';
import * as configApi from './configApi.service';
import { getToken } from './token.service';

// Perform the upload
const handleUpload = async (file: File) => {
  return new Promise<string>((resolve, reject) => {
    // Split the filename to get the name and type
    let fileParts = file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];

    let url: string = '';
    axios.post(`${configApi.API_URL}/document/upload`, {
      fileName: fileName,
      fileType: fileType
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    }).then(response => {
      const signedUrl = response.data.signedUrl;
      url = response.data.url;

      console.log("Recieved a signed request " + signedUrl);
      // Put the fileType in the headers for the upload
      const options = {
        headers: {
          'Content-Type': fileType
        }
      };
      resolve(url);

      axios.put(signedUrl, file, options)
        .then(result => {
          console.log("Response from s3")
        })
        .catch(error => {
          alert("ERROR " + JSON.stringify(error));
        })

    }).catch(error => {
      alert(JSON.stringify(error));
    })


  });
}

export { handleUpload };