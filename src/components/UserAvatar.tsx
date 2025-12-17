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
      <div className="size-10 md:size-14 rounded-full border-2 border-primary bg-primary flex items-center justify-center text-white">
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={`${firstName} ${lastName}`}
      className="size-10 md:size-14 rounded-full border-2 border-primary object-cover object-center inline-block"
      onError={() => setImageError(true)}
    />
  );
}

export default UserAvatar;
