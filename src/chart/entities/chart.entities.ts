export class UrlValues {
  url: 'main' | 'day' | 'week' | 'month' | 'year'
}

export class RegionValues {
  region: 'all' | 'domestic' | 'foreign' | 'others'
}

export class GenreValues {
  genre: {
    all
    domestic: 'all' | 'ballad' | 'dance' | 'hiphop' | 'R&B' | 'indie' | 'rock' | 'trot' | 'folk'
    foreign: 'all' | 'pop' | 'rock' | 'electronica' | 'hiphop' | 'R&B' | 'rock' | 'folk'
    others:
      | 'OST'
      | 'JAZZ'
      | 'newage'
      | 'jpop'
      | 'world'
      | 'ccm'
      | 'kids'
      | 'religion'
      | 'traditional'
  }
}
