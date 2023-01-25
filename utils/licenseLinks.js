// Function to add license links to license section
function licenseLinks(license) {
    const licenseLinks = {
        unLicense: '[UNLICENSE](https://choosealicense.com/licenses/unlicense/)',
        MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
        ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
        GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    }

    return licenseLinks[license];  
};


// Granting file access to other files
module.exports = licenseLinks;