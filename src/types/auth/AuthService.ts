// Original file: protos/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserRequest as _auth_GetUserRequest, GetUserRequest__Output as _auth_GetUserRequest__Output } from '../auth/GetUserRequest';
import type { GetUserResponse as _auth_GetUserResponse, GetUserResponse__Output as _auth_GetUserResponse__Output } from '../auth/GetUserResponse';
import type { LoginRequest as _auth_LoginRequest, LoginRequest__Output as _auth_LoginRequest__Output } from '../auth/LoginRequest';
import type { LoginResponse as _auth_LoginResponse, LoginResponse__Output as _auth_LoginResponse__Output } from '../auth/LoginResponse';
import type { ValidateTokenRequest as _auth_ValidateTokenRequest, ValidateTokenRequest__Output as _auth_ValidateTokenRequest__Output } from '../auth/ValidateTokenRequest';
import type { ValidateTokenResponse as _auth_ValidateTokenResponse, ValidateTokenResponse__Output as _auth_ValidateTokenResponse__Output } from '../auth/ValidateTokenResponse';

export interface AuthServiceClient extends grpc.Client {
  GetUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _auth_GetUserRequest, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _auth_GetUserRequest, callback: grpc.requestCallback<_auth_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _auth_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_LoginRequest, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_LoginRequest, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  ValidateToken(argument: _auth_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _auth_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _auth_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _auth_ValidateTokenRequest, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _auth_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _auth_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _auth_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _auth_ValidateTokenRequest, callback: grpc.requestCallback<_auth_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_auth_GetUserRequest__Output, _auth_GetUserResponse>;
  
  Login: grpc.handleUnaryCall<_auth_LoginRequest__Output, _auth_LoginResponse>;
  
  ValidateToken: grpc.handleUnaryCall<_auth_ValidateTokenRequest__Output, _auth_ValidateTokenResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetUser: MethodDefinition<_auth_GetUserRequest, _auth_GetUserResponse, _auth_GetUserRequest__Output, _auth_GetUserResponse__Output>
  Login: MethodDefinition<_auth_LoginRequest, _auth_LoginResponse, _auth_LoginRequest__Output, _auth_LoginResponse__Output>
  ValidateToken: MethodDefinition<_auth_ValidateTokenRequest, _auth_ValidateTokenResponse, _auth_ValidateTokenRequest__Output, _auth_ValidateTokenResponse__Output>
}
