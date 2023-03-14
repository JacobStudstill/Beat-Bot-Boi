import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography, Box } from '@mui/material';


export default function UploadButtons() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]
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
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Select File
        <input hidden accept="image/*" type="file" onChange={handleFileChange} />
      </Button>
      {selectedThumbnail && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography>{selectedFile.name}</Typography>
          <img src={selectedThumbnail} alt="thumbnail" style={{ maxWidth: 200, maxHeight: 200 }} />
        </Box>
      )}
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}