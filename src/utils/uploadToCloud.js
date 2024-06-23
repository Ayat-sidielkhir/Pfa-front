const cloud_name="dftiwyzgc";
const upload_preset="inzgrgg1";


export const uploadToCloudinary = async (pics, fileType) => {
  if (pics && fileType) {
    try {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", upload_preset);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`, {
        method: "POST",
        body: data
      });

      if (!res.ok) {
        throw new Error(`Failed to upload file: ${res.status} ${res.statusText}`);
      }

      const fileData = await res.json();
      console.log("res ----", fileData.url);
      return fileData.url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  } else {
    console.error("Invalid input: pics and fileType are required");
  }
};
