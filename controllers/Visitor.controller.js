import Visitor from '../models/Visitor';

const create = async (req, res) => {
  const { query: { name } } = req;
  const paramName = name ? name : 'Anónimo';

  const visitorBody = {
    name: paramName,
  }

  const visitor = new Visitor(visitorBody);

  try {
    await visitor.save();
    return res.status(200).send("<h1>El visitante fue almacenado con éxito</h1>");
  } catch (err) {
    return res.status(400).json({
      error
    })
  }
}

export default create;
