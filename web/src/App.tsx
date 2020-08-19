import React, { useState, FormEvent } from 'react';
import api from './services/api';

function App() {
  const [files, setFiles] = useState<FileList | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = new FormData();
  
    if (!files)
      return

    for( let i = 0; i < files.length; i++) {
      data.append('img', files[i]);
    }
    
    
    //api.post('upload', data);
    console.log(data);

  }

  return (
    <>
      <h1>Upload</h1>

      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" name="img" multiple onChange={(event) => {
          setFiles(event.target.files);
        }} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
