export interface SpotifyTokenResponse {
    access_token: string;
    token_type: "Bearer";
    expires_in: number;
    refresh_token?: string;
    scope?: string;
}

export interface SpotifyErrorResponse {
    error: string;
    error_description: string;
}