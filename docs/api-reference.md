# API Reference

## Smart Contract APIs

### $MAIZ-MXN Token

#### Core Functions
```solidity
function mint(address to, uint256 amount) external
function burn(uint256 amount) external
function transfer(address to, uint256 amount) external
function approve(address spender, uint256 amount) external
```

#### Staking Functions
```solidity
function stake(uint256 amount) external
function unstake(uint256 amount) external
function getRewards() external
function getAPY() external view returns (uint256)
```

### Governance Token

#### Voting Functions
```solidity
function createProposal(bytes calldata data) external
function vote(uint256 proposalId, bool support) external
function execute(uint256 proposalId) external
function getProposalState(uint256 proposalId) external view
```

## Account Abstraction APIs

### Smart Account

#### Transaction Management
```solidity
function executeTransaction(
    address to,
    uint256 value,
    bytes calldata data
) external

function executeBatch(
    address[] calldata to,
    uint256[] calldata value,
    bytes[] calldata data
) external
```

#### Account Recovery
```solidity
function setRecoveryAddress(address recovery) external
function initiateRecovery(address newOwner) external
function cancelRecovery() external
```

## Frontend APIs

### Web3 Integration

#### Connection
```typescript
interface WalletConnection {
  connect(): Promise<string>;
  disconnect(): Promise<void>;
  getAddress(): string;
  getBalance(): Promise<BigNumber>;
}
```

#### Transactions
```typescript
interface TransactionService {
  sendTransaction(tx: Transaction): Promise<string>;
  getTransaction(hash: string): Promise<TransactionReceipt>;
  estimateGas(tx: Transaction): Promise<BigNumber>;
}
```

### WhatsApp Integration

#### Transfer API
```typescript
interface WhatsAppTransfer {
  sendTokens(
    phoneNumber: string,
    amount: BigNumber,
    message?: string
  ): Promise<string>;
  
  getTransferStatus(
    transferId: string
  ): Promise<TransferStatus>;
}
```

## REST APIs

### User Management

#### Authentication
```typescript
POST /api/v1/auth/login
POST /api/v1/auth/logout
POST /api/v1/auth/refresh
```

#### Profile Management
```typescript
GET /api/v1/user/profile
PUT /api/v1/user/profile
POST /api/v1/user/verify
```

### Transaction Management

#### Token Operations
```typescript
POST /api/v1/transactions/transfer
GET /api/v1/transactions/history
GET /api/v1/transactions/{txId}
```

#### Staking Operations
```typescript
POST /api/v1/staking/stake
POST /api/v1/staking/unstake
GET /api/v1/staking/rewards
GET /api/v1/staking/apy
```

## WebSocket APIs

### Real-time Updates

#### Price Feed
```typescript
interface PriceFeed {
  subscribe(token: string): void;
  unsubscribe(token: string): void;
  onPriceUpdate(callback: (price: Price) => void): void;
}
```

#### Transaction Updates
```typescript
interface TransactionUpdates {
  subscribe(txHash: string): void;
  unsubscribe(txHash: string): void;
  onConfirmation(callback: (confirmation: Confirmation) => void): void;
}
```

## Error Codes

### HTTP Status Codes
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### Custom Error Codes
```typescript
enum ErrorCodes {
  INSUFFICIENT_BALANCE = 'E001',
  INVALID_SIGNATURE = 'E002',
  TRANSACTION_FAILED = 'E003',
  RATE_LIMIT_EXCEEDED = 'E004',
  INVALID_PHONE_NUMBER = 'E005'
}
```

## Rate Limits

### API Endpoints
- Authentication: 5 requests per minute
- Transactions: 10 requests per minute
- User Profile: 20 requests per minute
- Price Feed: 60 requests per minute

### WebSocket Connections
- Maximum connections per user: 5
- Maximum subscriptions per connection: 10
- Message rate: 100 messages per second

## Response Formats

### Success Response
```json
{
  "success": true,
  "data": {},
  "timestamp": "2025-02-18T13:29:48-07:00"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "E001",
    "message": "Insufficient balance",
    "details": {}
  },
  "timestamp": "2025-02-18T13:29:48-07:00"
}
