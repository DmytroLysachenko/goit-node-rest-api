import fs from 'node:fs/promises';
import path from 'node:path';
import { faker } from '@faker-js/faker';
import { Contact } from '../db/schemas/Contact.js';
import exp from 'node:constants';

export async function listContacts() {
  return Contact.find();
}

export async function getContactById(_id) {
  return Contact.findOne({ _id }) || null;
}

export async function removeContact(_id) {
  return Contact.findByIdAndDelete({ _id });
}

export async function addContact(name, email, phone, favorite) {
  return Contact.create({ name, email, phone, favorite });
}

export async function changeContact(_id, fields) {
  return Contact.findByIdAndUpdate({ _id }, fields, { new: true });
}

export async function updateStatusContact(_id, favorite) {
  return Contact.findByIdAndUpdate({ _id }, { favorite }, { new: true });
}
