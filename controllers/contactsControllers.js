import HttpError from '../helpers/HttpError.js';
import {
  addContact,
  changeContact,
  getContactById,
  listContacts,
  removeContact,
} from '../services/contactsServices.js';

export const checkContactId = async (req, _, next) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    next(HttpError(404, 'Contact not found'));
  } else {
    next();
  }
};

export const getAllContacts = async (_, res) => {
  res.json(await listContacts());
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  res.json(result);
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  res.json(await removeContact(id));
};

export const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  res.json(await addContact(name, email, phone));
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  res.json(await changeContact({ name, email, phone, id }));
};
