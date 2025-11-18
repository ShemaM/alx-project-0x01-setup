// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const emptyUser: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default function UserModal({ isOpen, onClose, onSubmit }: UserModalProps) {
  const [formData, setFormData] = useState<UserData>(emptyUser);

  // Handles text inputs including nested paths like "address.city"
  const handleChange = (path: string, value: string) => {
    const updated = { ...formData };
    const keys = path.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let obj: any = updated;

    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }

    obj[keys[keys.length - 1]] = value;

    setFormData(updated);
  };

  const handleSubmit = () => {
    // The project requires submitting ONLY UserProps (small interface)
    onSubmit({
        id: formData.id ?? 0,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    setFormData(emptyUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New User</h2>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={formData.address.city}
          onChange={(e) => handleChange("address.city", e.target.value)}
        />

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
