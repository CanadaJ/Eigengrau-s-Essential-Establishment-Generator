setup.updateSocioPolitics = function (town) {
  var economicIdeologyIST = town.economicIdeologyIST
  var politicalIdeologyIC = town.politicalIdeologyIC
  var economicPairs = {
    feudalist: 'feudalism',
    capitalist: 'capitalism',
    syndicalist: 'syndicalism',
    primitivist: 'primitivism',
    communist: 'communism'
  }

  var politicalIdeologyPairs = {
    autocratic: 'autocracy',
    meritocratic: 'meritocracy',
    democratic: 'democracy',
    kleptocratic: 'kleptocracy',
    magocratic: 'magocracy',
    militocratic: 'militocracy',
    oligarchic: 'oligarchy',
    pedocratic: 'pedocracy',
    theocratic: 'theocracy',
    technocratic: 'technocracy'
  }
  if (economicIdeologyIST !== setup.townData.economicIdeology[town.economicIdeology].descriptors.economicIdeologyIST) {
    town.economicIdeology = economicPairs[economicIdeologyIST]
  }

  if (politicalIdeologyIC !== setup.townData.politicalIdeology[town.politicalIdeology].data.politicalIdeologyIC) {
    town.politicalIdeology = politicalIdeologyPairs[politicalIdeologyIC]
  }

  town = Object.assign(town, setup.townData.economicIdeology[town.economicIdeology].descriptors)
  town = Object.assign(town, setup.townData.politicalIdeology[town.politicalIdeology].data)

  return town
}
