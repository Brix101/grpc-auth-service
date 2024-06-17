import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  loadPackageDefinition,
  sendUnaryData,
  status,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./types/auth";
import { AuthServiceHandlers } from "./types/auth/AuthService";
import { GetUserRequest } from "./types/auth/GetUserRequest";
import { GetUserResponse } from "./types/auth/GetUserResponse";
import { LoginRequest } from "./types/auth/LoginRequest";
import { LoginResponse } from "./types/auth/LoginResponse";
import { ValidateTokenRequest } from "./types/auth/ValidateTokenRequest";
import { ValidateTokenResponse } from "./types/auth/ValidateTokenResponse";

const PROTO_PATH = process.cwd() + "/protos/auth.proto";

type User = {
  id: string;
  username: string;
  password: string;
  email: string;
};

let users = [
  { id: "1", username: "user1", password: "pass1", email: "user1@example.com" },
  { id: "2", username: "user2", password: "pass2", email: "user2@example.com" },
  // Add more users as needed
];

function getUser(username: string) {
  return users.find((user) => user.username === username);
}

function addUser(user: User) {
  users.push(user);
}

function validateUser(username?: string, password?: string) {
  const user = getUser(username ?? "");
  if (user && user.password !== password) {
    return null;
  }

  return user;
}

const packageDefination = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = loadPackageDefinition(
  packageDefination
) as unknown as ProtoGrpcType;

const authProto = protoDescriptor.auth;

const authServiceHandler: AuthServiceHandlers = {
  Login: (
    call: ServerUnaryCall<LoginRequest, LoginResponse>,
    callback: sendUnaryData<LoginResponse>
  ) => {
    const apiKey = call.metadata.get("x-api-key")[0];
    // Validate the API key
    if (apiKey !== "your-api-key") {
      callback({ code: status.UNAUTHENTICATED, details: "Invalid API key" });
      return;
    }

    const { username, password } = call.request;
    const user = validateUser(username, password);
    if (user) {
      callback(null, { token: "dummy_token" }); // Replace with actual token generation
    } else {
      callback({
        code: status.UNAUTHENTICATED,
        details: "Invalid username or password",
      });
    }
  },
  ValidateToken: (
    call: ServerUnaryCall<ValidateTokenRequest, ValidateTokenResponse>,
    callback: sendUnaryData<ValidateTokenResponse>
  ) => {
    const apiKey = call.metadata.get("x-api-key")[0];
    // Validate the API key
    if (apiKey !== "your-api-key") {
      callback({ code: status.UNAUTHENTICATED, details: "Invalid API key" });
      return;
    }

    const { token } = call.request;
    // Validate the token and return the result
    // This is a dummy implementation, replace with actual token validation
    if (token === "dummy_token") {
      callback(null, { valid: true });
    } else {
      callback(null, { valid: false });
    }
  },
  GetUser: (
    call: ServerUnaryCall<GetUserRequest, GetUserResponse>,
    callback: sendUnaryData<GetUserResponse>
  ) => {
    const apiKey = call.metadata.get("x-api-key")[0];
    // Validate the API key
    if (apiKey !== "your-api-key") {
      callback({ code: status.UNAUTHENTICATED, details: "Invalid API key" });
      return;
    }

    const { token } = call.request;
    // Validate the token and return the user's information
    // This is a dummy implementation, replace with actual token validation and user fetching
    if (token === "dummy_token") {
      callback(null, {
        id: "1",
        username: "user1",
        email: "user1@example.com",
      });
    } else {
      callback({ code: status.UNAUTHENTICATED, details: "Invalid token" });
    }
  },
};

const server = new Server();

server.addService(authProto.AuthService.service, authServiceHandler);

const port = process.env.PORT || 50051;
server.bindAsync("0.0.0.0:" + port, ServerCredentials.createInsecure(), () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
