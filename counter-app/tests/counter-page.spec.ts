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

  it('should have a Bootstrap card container', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.card');
    expect(card).toBeTruthy();
  });

  it('should render title as a prominent heading', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.classList).toContain('display-5');
  });

  it('should display counter value with a large display class', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const countEl = fixture.nativeElement.querySelector('.count');
    expect(countEl).toBeTruthy();
    expect(countEl.classList).toContain('display-1');
  });

  it('should style the increment button with Bootstrap btn classes', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('btn');
    expect(button.classList).toContain('btn-primary');
  });

  it('should render a decrement button to the right of the increment button', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[1].textContent).toContain('Decrement');
  });

  it('should decrement count to 0 after increment then decrement', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const [incrementBtn, decrementBtn] = fixture.nativeElement.querySelectorAll('button');
    incrementBtn.click();
    fixture.detectChanges();
    decrementBtn.click();
    expect(fixture.componentInstance.count).toBe(0);
  });

  it('should disable the decrement button when count is 0', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const decrementBtn = fixture.nativeElement.querySelectorAll('button')[1];
    expect(decrementBtn.disabled).toBe(true);
  });

  it('should enable the decrement button when count is greater than 0', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    const [incrementBtn, decrementBtn] = fixture.nativeElement.querySelectorAll('button');
    incrementBtn.click();
    fixture.detectChanges();
    expect(decrementBtn.disabled).toBe(false);
  });

  it('should not go below 0 when decrement is clicked at count 0', () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.componentInstance.count = 0;
    fixture.componentInstance.decrement();
    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.count).toBe(0);
  });
});
