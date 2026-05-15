import { TestBed } from '@angular/core/testing';
import { CounterPage } from '../src/app/counter-page/counter-page';

describe('CounterPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPage],
    }).compileComponents();
  });

  it('should initialize counter to 0', () => {
    const fixture = TestBed.createComponent(CounterPage);
    const component = fixture.componentInstance;
    expect(component.count).toBe(0);
  });

  it('should increment count to 1 after one click', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(fixture.componentInstance.count).toBe(1);
  });

  it('should accumulate count correctly after multiple clicks', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    button.click();
    button.click();
    expect(fixture.componentInstance.count).toBe(3);
  });

  it('should display account number and keep it unchanged after button clicks', async () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const accountEl = compiled.querySelector('.account-number');
    const initialText = accountEl?.textContent ?? '';
    expect(initialText).toContain('ACC-000123');

    const button = compiled.querySelector('button');
    button?.click();
    fixture.detectChanges();
    expect(accountEl?.textContent).toBe(initialText);
  });
});
