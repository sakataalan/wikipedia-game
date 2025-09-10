export interface WikiRandom {
    query: {
        random: [
        {
            id: number;
            title: string;
        }
    ]
  }
}

export interface WikiPage {
  pageid: number;
  title: string;
  fullurl: string;
}

export interface WikiPageResponse {
  batchcomplete: string;
  query: {
    pages: {
      [pageId: string]: WikiPage; 
    };
  };
}