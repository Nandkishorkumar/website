import { useState } from "react";
import ContactForm from "./contact-form";

interface ContactProps {
  user: any;
  count: number;
}

const Contact = ({ user, count }: ContactProps) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-4">
        {count && (
          <span className="rounded-full w-8 h-8 bg-primary flex items-center justify-center text-xl text-white">
            {count}
          </span>
        )}
        <p className="text-xl text-heading capitalize">Contact Number</p>
      </div>
      {user?.profile?.contact && !edit ? (
        <>
          <p>{user.profile.contact}</p>
          <button onClick={() => setEdit(true)}>edit</button>
        </>
      ) : (
        <ContactForm
          initialValues={user?.profile?.contact}
          userId={user?.id}
          profileId={user?.profile?.id}
        />
      )}
    </>
  );
};

export default Contact;
