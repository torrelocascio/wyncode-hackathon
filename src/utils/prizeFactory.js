import uuidv4 from 'uuid/v4';

export default (name, description) => {
  return {
    uuid: uuidv4(),
    name: name,
    description: description
  }
}