("use strict");

const express = require("express"),
  multiParty = require("connect-multiparty");

let api = express.Router(),
  filesController = require("../controllers/files.controller"),
  galleryMiddleware = multiParty({ uploadDir: "./files/gallery" }),
  videosMiddleware = multiParty({ uploadDir: "./files/videos" }),
  pdfMiddleware = multiParty({ uploadDir: "./files/pdf" });

//files ENDPOINT
api.get("/files/:directory/:urlFile", filesController.showFiles);

api.post("/files_gallery", galleryMiddleware, filesController.uploadFile);
api.post("/files_videos", videosMiddleware, filesController.uploadFile);

api.delete("/files/:directory/:urlFile", filesController.deleteFiles);

api.put(
  "/files/:directory/:urlFile",
  galleryMiddleware,
  filesController.modifyFiles
);

// api.post("/upload_file", pdfMiddleware, filesController.uploadFile);

module.exports = api;
