import figletRender from '../../lib/figlet-render';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (!req.body.text) {
    return res.json({ text: 'Error: Missing text' });
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ text: figletRender(req.body.text) }));
};
