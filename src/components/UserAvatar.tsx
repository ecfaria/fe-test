import { useState } from "react";

function UserAvatar({
  firstName,
  lastName,
  photo,
}: {
  firstName: string;
  lastName: string;
  photo?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!photo || imageError) {
    return (
      <div className="w-14 h-14 rounded-full mr-2 border-2 border-primary bg-primary flex items-center justify-center text-white">
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={`${firstName} ${lastName}`}
      className="w-14 h-14 rounded-full mr-2 border-2 border-primary object-cover"
      onError={() => setImageError(true)}
    />
  );
}

export default UserAvatar;
