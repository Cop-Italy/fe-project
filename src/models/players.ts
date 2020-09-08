import Player from './player';

export default interface Players {
  players: Player[];
  totalPages: number;
  currentPage: number;
  nextPage: number;
  perPage: number;
  totalCount: number;
}
