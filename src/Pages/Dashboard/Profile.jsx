import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaUserEdit, FaSave, FaUser, FaImage } from "react-icons/fa";

const Profile = () => {
  const { user, userLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (userLoading) {
    return;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Profile</h1>

      {/* Profile Card */}
      <div className="p-6 rounded-2xl shadow bg-base-100 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || "/avatar.png"} alt="User" />
            </div>
          </div>
          <p className="font-semibold">{user?.displayName || "User"}</p>
          <p className="text-sm text-base-content/60  break-all">
            {user?.email}
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField label="Full Name" value={user?.displayName} />
            <ProfileField label="Email" value={user?.email} />
            <ProfileField label="Phone" value="Not set" />
            <ProfileField label="Address" value="Not set" />
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-base-100/70 flex items-center justify-center z-50">
          <div className="bg-base-300 p-6 rounded-2xl shadow-xl w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <form className="space-y-4">
              <div className="relative">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full"
                />
                <span className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1">
                  <FaUser />
                </span>
              </div>
              <div className="relative cursor-pointer">
                <input
                  required
                  name="image"
                  type="file"
                  className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full cursor-pointer"
                />
                <span className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1">
                  <FaImage />
                </span>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <FaSave /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div>
    <p className="text-sm text-base-content/60">{label}</p>
    <p className="font-medium break-all">{value || "Not set"}</p>
  </div>
);

export default Profile;
