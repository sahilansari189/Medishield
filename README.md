# Medishield 🏥⛓️

A decentralized Electronic Medical Records (EMR) sharing system built on blockchain technology, ensuring secure, transparent, and patient-controlled healthcare data management.

## 🌟 Overview

Medishield is a revolutionary decentralized solution that transforms how Electronic Medical Records are stored, shared, and accessed. By leveraging the power of blockchain technology and distributed storage, it provides a secure, transparent, and patient-centric approach to healthcare data management.

**Key Benefits:**
- **Patient-Controlled**: Patients have complete control over their medical data
- **Secure & Private**: Advanced encryption and blockchain security
- **Decentralized**: No single point of failure or control
- **Transparent**: Immutable audit trail of all data access
- **Interoperable**: Seamless sharing between authorized healthcare providers

## 🚀 Features

### 🔐 Security & Privacy
- **Blockchain-based Access Control**: Only authorized personnel can access medical records
- **Encrypted Data Storage**: All medical files are encrypted before storage
- **Immutable Audit Trail**: Complete transparency of who accessed what and when
- **Patient Consent Management**: Granular control over data sharing permissions

### 🌐 Decentralized Architecture
- **IPFS Storage**: Medical files stored on InterPlanetary File System for redundancy
- **Ethereum Smart Contracts**: Automated and trustless access control
- **No Central Authority**: Eliminates single points of failure
- **Global Accessibility**: Access records from anywhere in the world

### 👥 Multi-Stakeholder Support
- **Patients**: Full control over personal medical data
- **Healthcare Providers**: Secure access to authorized patient records
- **Medical Institutions**: Streamlined record management and sharing
- **Researchers**: Anonymized data access for medical research (with consent)

## 🛠️ Technology Stack

### Blockchain & Smart Contracts
- **Ethereum**: Primary blockchain network for smart contract deployment
- **Solidity**: Smart contract development language
- **Web3.js**: Blockchain interaction library
- **MetaMask**: Ethereum wallet integration

### Frontend & User Interface
- **ReactJS**: Modern, responsive user interface
- **JavaScript/HTML/CSS**: Core web technologies

### Storage & File Management
- **IPFS (InterPlanetary File System)**: Decentralized file storage
- **Encryption**: AES-256 encryption for sensitive medical data

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Patient Web   │    │   Doctor Web    │    │  Hospital Web   │
│   Application   │    │   Application   │    │   Application   │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                       │
          └──────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────┴─────────────┐
                    │      Web3.js Library      │
                    └─────────────┬─────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │    Ethereum Blockchain    │
                    │     (Smart Contracts)     │
                    └─────────────┬─────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │          IPFS             │
                    │   (Encrypted Medical      │
                    │       Records)            │
                    └───────────────────────────┘
```

## 📋 Prerequisites

Before setting up Medishield, ensure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **MetaMask** browser extension
- **Truffle Suite** (for smart contract development)
- **Ganache** (for local blockchain development)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sahilansari189/Medishield.git
cd Medishield
```

### 2. Install Dependencies
```bash
# Install project dependencies
npm install

# Install Truffle globally (if not already installed)
npm install -g truffle
```

### 3. Set Up Local Blockchain
```bash
# Install Ganache CLI (optional, for local development)
npm install -g ganache-cli

# Start local blockchain
ganache-cli
```

### 4. Deploy Smart Contracts
```bash
# Compile smart contracts
truffle compile

# Deploy to local network
truffle migrate --network development

# Deploy to testnet (configure network in truffle-config.js)
truffle migrate --network ropsten
```

### 5. Configure Environment
```bash
# Copy environment template
cp .secrets.json

# Edit .secrets.json file with your configuration
# - Ethereum network URLs
# - IPFS node configuration
# - Smart contract addresses
```

### 6. Start the Application
```bash
# Start the React development server
npm start

# The application will be available at http://localhost:3000
```

## 🔧 Configuration

### Smart Contract Configuration
Update the contract addresses in `src/config/contracts.js` after deployment:

```javascript
export const CONTRACT_ADDRESSES = {
  MedishieldEMR: "0x...", // Your deployed contract address
  PatientRegistry: "0x...",
  DoctorRegistry: "0x..."
};
```

### IPFS Configuration
Configure IPFS settings in `src/config/ipfs.js`:

```javascript
export const IPFS_CONFIG = {
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
};
```

## 💡 Usage

### For Patients
1. **Register**: Create your patient profile on the blockchain
2. **Upload Records**: Securely upload medical documents to IPFS
3. **Grant Access**: Authorize healthcare providers to view specific records
4. **Monitor Access**: Track who has accessed your medical data
5. **Revoke Access**: Remove permissions at any time

### For Healthcare Providers
1. **Register**: Register as an authorized healthcare provider
2. **Request Access**: Request permission to view patient records
3. **View Records**: Access authorized patient medical history
4. **Add Records**: Upload new medical documents with patient consent
5. **Collaborate**: Share records with other authorized providers

### For Medical Institutions
1. **Institutional Registration**: Register your medical institution
2. **Provider Management**: Manage healthcare provider accounts
3. **Bulk Operations**: Handle multiple patient records efficiently
4. **Compliance Tracking**: Monitor access logs for regulatory compliance

## 🔒 Security Features

### Data Protection
- **End-to-End Encryption**: All medical data encrypted before storage
- **Private Key Management**: Secure key storage and management
- **Access Logging**: Immutable logs of all data access attempts
- **Permission Management**: Granular control over data sharing

### Smart Contract Security
- **Access Control**: Role-based permissions enforced by smart contracts
- **Input Validation**: Comprehensive validation of all contract inputs
- **Reentrancy Protection**: Prevention of common smart contract vulnerabilities
- **Upgradeable Contracts**: Secure upgrade mechanisms for bug fixes

## 🧪 Testing

### Run Smart Contract Tests
```bash
# Run all tests
truffle test

# Run specific test file
truffle test test/MedishieldEMR.test.js

# Run tests with coverage
npm run test:coverage
```

### Frontend Testing
```bash
# Run React component tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate test coverage report
npm test -- --coverage
```

## 🚀 Deployment

### Testnet Deployment
```bash
# Deploy to Ethereum testnet (Sepolia/Goerli)
truffle migrate --network sepolia

# Verify contracts on Etherscan
truffle run verify MedishieldEMR --network sepolia
```

### Production Deployment
```bash
# Build production React app
npm run build

# Deploy to your hosting platform
# (Netlify, Vercel, AWS S3, etc.)
```

## 🤝 Contributing

We welcome contributions to Medishield! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/sahilansari189/Medishield/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sahilansari189/Medishield/discussions)
- **Email**: [sahilansari189@gmail.com](mailto:sa760887@gmail.com)

## 🙏 Acknowledgments

- Ethereum Foundation for blockchain infrastructure
- IPFS community for decentralized storage solutions
- OpenZeppelin for secure smart contract libraries
- React community for frontend framework
- All contributors and supporters of the project

## 🚧 Roadmap

### Version 2.0 (Planned)
- [ ] Mobile application (React Native)
- [ ] Integration with major EHR systems
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Telemedicine integration

### Version 3.0 (Future)
- [ ] AI-powered medical insights
- [ ] Cross-chain compatibility
- [ ] Advanced privacy features (zero-knowledge proofs)
- [ ] Integration with IoT medical devices
- [ ] Decentralized identity management

---

**Built with ❤️ by [Sahil Ansari](https://github.com/sahilansari189)**