//appel des middlewares
const multer = require("multer");

//définition du format de l'image
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  // Création d'un objet de configuration pour Multer
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension); // création du no mde l'image
  },
});

const fileFilter = (req, file, callback) => {
  const extension = MIME_TYPES[file.mimetype];
  // si l'extension est valide alors True sinon False
  if (extension === "jpg" || extension === "jpeg" || extension === "png") {
    callback(null, true);
  } else {
    callback("Erreur : Mauvais type de fichier", false);
  }
};

module.exports = multer({
  storage, // Ajout de l'objet multer
  limits: { fileSize: 104857600 }, // Définition de la taille de fichier maximale à télécharger à 100 Mo
  fileFilter, // Application du filtre d'extension
}).single("image"); // assure que l'utilisateur sélectionne une seule image lors de l'envoie