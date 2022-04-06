type Game = unknown;
type Card = unknown;
type Hand = Card[];

declare type UserModelAttrs = {
  username: string;
  encryptedPassword: string;
  game?: Game;
  pNum?: 0 | 1;
  hand?: Hand;
  points?: Card[];
  faceCards?: Card[];
  frozenId?: Card;
  rank?: number;
};

declare var User: Sails.Model<UserModelAttrs>;

declare type GameModelAttrs = {
  name: string;
  status: boolean;
};

declare var Game: Sails.Model<GameModelAttrs>;