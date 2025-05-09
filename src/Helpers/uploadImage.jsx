export const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("source", imageFile);

    try {
        const response = await fetch("https://postimage.me/api/1/upload", {
            method: "POST",
            headers: {
                "X-API-Key": import.meta.env.POSTIMAGE_API_KEY
            },
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const result = await response.json();
        console.log("Upload successful:", result);
        return {
            img_url: result.image.url,
            img_delete_url: result.image.delete_url,
            img_viewer_url: result.image.url_viewer
        };
    } catch (error) {
        console.error("Upload failed:", error);
        throw error;
    }
};
