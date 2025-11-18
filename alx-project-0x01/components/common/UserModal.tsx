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

  const handleChange = (path: string, value: string) => {
    // Clone safely without using "any"
    const clone = JSON.parse(JSON.stringify(formData)) as UserData;

    // Update nested values using dot-notation (address.city, company.name, etc.)
    const keys = path.split(".");
    let obj: unknown = clone;

    for (let i = 0; i < keys.length - 1; i++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      obj = (obj as any)[keys[i]];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (obj as any)[keys[keys.length - 1]] = value;

    setFormData(clone);
  };

  const handleSubmit = () => {
    onSubmit(formData);
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
