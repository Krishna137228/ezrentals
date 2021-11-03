require('dotenv').config()
const {GoogleAuth} = require('google-auth-library');
const {Storage} = require('@google-cloud/storage');

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials

var express = require('express');
var app = express();

const port = process.env.port || 5000

// const auth = new GoogleAuth({
//       scopes: 'https://www.googleapis.com/auth/cloudstorage.read_write'
//     });

// const storage = new Storage({
//     projectId: 'clean-circuit-329306',
//     credentials: {
//         client_email: 'ergcs-167@clean-circuit-329306.iam.gserviceaccount.com',
//         private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCE25gr8WqoDhNi\noBnoTvCXJXMbv2aiuofj0KKe34duact8cPD0w9Abj2u7MGfW04yaX9jF9HuiZ6GE\n6LzYJKjxG5fJmd9M6L9FX9M+sXZ81ylM0vpldHHBAme7LER/gvBfY79sTkFPdhIe\nU8+BR6atGjIbawJdAJWowv1KfrFAD/BJ3rXz8ynoTalvkwwKcPTmyRRaJ77XH6aY\noS/843EpqiiIXkdtZBBkt/m4PZlXUzQ86qkStAAeUUS9SKf+P1cEYAbpUkiaetR6\nchVe69hbFeFav9EAY925YOd4l/ejq/vK/6Vdnkmu0jqTRDQQioWGINxqWSG1avlP\npWFrH6k7AgMBAAECggEAB65IWGCvHq3IT3SGZZNME849nuDhtqOxCn8mf6fYRQ5c\nY20wyP3EZhYpuhsyIvh8/EnGlv8rjKKQHcZ0xcwsxi+nBqfc1y3s15O9ezY4Qum6\nK1pWe+S6VNhmQIBuf1lbEIYMQYnZUGuONZmjzqC3+/Gelvjd8fGANXmnD2uj+gTn\nN14PMFUFZM/prBe7vJHnze2Vz/eSRY+UfJo/3iOOV9h+wzfh1G/FqkxTuqn1s8zu\n9zr+WXnXCK8qZKuVvx4YXothBDhlK3QZjOoPdYnS/JTys2+TRGGlaf0JhszEaNAM\nBVjCzjQVvSwWdaFRT2PjUh6OXQgRV/4hDPU9lK+/HQKBgQC6MUXTFpBA7YYY5g4F\nSO9vLCGZkHCXjFbX62C1D9ZNr3xejBgrHxqa8xMLWVJ/Dv7yTxAuS5xJe7vDn+da\nCX+rJI0VETWzzRgpnezEHQqUnYcjaJbfxHrmnn4dR4hOJjc3MQJiacr/+CjqoT2e\nzmFSZmdS3oVHZlzeMUHY/jvLpwKBgQC2q0Q4kc9OV2HDxm0nKuO6a4pun1M0rxj7\nzJZFDIJHRZmkH0wtVWttQ3lZPWRzYsLbogYFZ5iv1OtPJhkDcyS3+10An5YqCL9Q\nD8vu9pdYOxn3lqIQny7axivlcYLwkKutaSRQ89UvB5toOJSobBKm4H2J+r5OrXWS\nEIGy7g5YTQKBgHLWUw+Xmg9BsHSI59rgmjTCTlLtoFQITcPMvA/Qnce6VYXm+D0Y\naQtqorNcOyJ8uEfw9bToE5PLCgrlBAcnVqPS3mVBARNNivqYGeD3XIA/DIuNRYjs\nITU+SeB7LxmsPl//DU5vm7H2eB4Gpv/coG/3EwEsl51rCBpO3SMd4vl/AoGBAK6C\nBYWJfqOYBRTz7nk5lx8T98bgvKubD2IWPASxA5C1JCdPowW4Eg3rJPWlGd7FneQW\n8GufYZWw8i/F9KWADbcaEuoyi1GS07nXrXqX51Pp+k+2fxMkD63/HhZvD6lkfC4J\nQSF5H9NzD/tL+nC/9j2oPyZe/gnJ2oT08gMPO3MNAoGAaKum0f5rUO5tLD1pUK4Y\n2nXyRo7CWmJ8tf4Ua/ucTlrklzsLZr2JpIU5tWWJnHHnHkY5UImFpRsqoMHjl0O2\nMRl7j+x8tbZl3kiCBwRXXjNnSfQS5po0YoHn1bBOHYDe0vYbnJ6VTt5KCQgurmpw\nHo5WvCiGnrFDgR1NGfjdmaA=\n-----END PRIVATE KEY-----\n'
//     }
// })
const storage = new Storage();
async function getImg(req) {
    
    // const client = await auth.getClient(); 
    // const projectId = await auth.getProjectId();
    // console.log('My project ', projectId); 
    // const url = `https://storage.googleapis.com/easy_rentals/Watch.jpeg`;
    // const res = await client.request({ url });
    // return res
    try {
        const results = await storage.getBuckets();
    
        const [buckets] = results;
    
        console.log('Buckets:');
        buckets.forEach(bucket => {
          console.log(bucket.name);
        });
        
      } catch (err) {
        console.error('ERROR:', err);
      }
  }

  

app.get('/getImage', function (req, res) {
    getImg(req).then(res => {
        console.log(res);
    }).catch((err) => {
        console.log(err)
    });
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ', port);
});