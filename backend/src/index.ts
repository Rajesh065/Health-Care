import app from './app';

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`MedFlow Clinical EHR running on port ${PORT}`);
});
