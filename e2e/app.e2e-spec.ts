import { TimetrackerPage } from './app.po';

describe('timetracker App', () => {
  let page: TimetrackerPage;

  beforeEach(() => {
    page = new TimetrackerPage();
  });

  it('should display message saying TimeTracker', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('TimeTracker');
  });
});
