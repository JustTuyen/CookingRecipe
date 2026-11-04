#for services
import cloudinary.uploader
from .models import Media

def upload_media(file, folder="uploads",alt_text=""):
    result = cloudinary.uploader.upload(file, folder=folder,resource_type="auto")
    return Media.objects.create(
        public_id=result["public_id"],
        url=result["secure_url"],
        resource_type=result.get("resource_type", Media.ResourceType.IMAGE),
        delivery_type=result.get("type", "upload"),
        format=result.get("format", ""),
        width=result.get("width"),
        height=result.get("height"),
        duration=result.get("duration"),  # only present for video
        bytes=result.get("bytes"),
        alt_text=alt_text,
    )
def delete_cloudinary_asset(media):
    cloudinary.uploader.destroy(
        media.public_id,
        resource_type=media.resource_type,
        type=media.delivery_type,
    )