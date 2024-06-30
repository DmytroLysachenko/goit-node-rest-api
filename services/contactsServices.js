import fs from 'node:fs/promises';
import path from 'node:path';
import { faker } from '@faker-js/faker';

const contactsPath = path.resolve('db', 'contacts.json');

export async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
}

export async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts.find((contact) => contact.id === contactId) || null;
}

export async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  const reqContact =
    contacts.find((contact) => contact.id === contactId) || null;
  fs.writeFile(
    contactsPath,
    JSON.stringify(
      contacts.filter((contact) => contact.id !== contactId),
      null,
      2
    )
  );
  return reqContact;
}

export async function addContact(name, email, phone) {
  const newContact = { name, email, phone, id: faker.string.uuid() };
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

export async function changeContact({ name, email, phone, id }) {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(data);
  const newContact = contacts.find((contact) => contact.id === id);
  if (name) {
    newContact.name = name;
  }
  if (email) {
    newContact.email = email;
  }
  if (phone) {
    newContact.phone = phone;
  }
  contacts.filter((contact) => contact.id !== id);
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}
