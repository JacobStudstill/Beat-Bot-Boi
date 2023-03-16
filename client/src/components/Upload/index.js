import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, Box } from '@mui/material';
import axios from 'axios';

export default function UploadButtons() {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    console.log('This is the file from the form', event.target.files[0].name)
    setSelectedFile(file)

    //creates new FileReader object
    const reader = new FileReader();

    //sets up the onload function to create thumbnail
    reader.onload = (event) => {
      const thumbnail = event.target.result;
      setSelectedThumbnail(thumbnail);
    }

    //read the file as a data URL
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    

    if (!formData) {console.log('Empty')}
    try {
      console.log("This is the form data", formData)
      const response = await axios.post('/api/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      });
      console.log("Response URL:", response.config.url);
      // console.log('')
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Button variant="contained" component="label">
        Select File
        <input name='avatar' encType="multipart/form-data" hidden accept="image/*" type="file" onChange={handleFileChange} />
      </Button>
      {selectedThumbnail && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>{selectedFile.name}</Typography>
          <img src={selectedThumbnail} alt="thumbnail" style={{ maxWidth: 200, maxHeight: 200 }} />
        </Box>
      )}
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} >
        Submit
      </Button>
      </form>
    </Stack>
  );
}