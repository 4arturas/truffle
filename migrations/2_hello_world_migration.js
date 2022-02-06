const Helloworld          = artifacts.require("Helloworld");
// const HelloworldPermanent = artifacts.require("HelloworldPermanent");

module.exports = function (deployer) {
  deployer.deploy(Helloworld, "Hello world constructor");
};
