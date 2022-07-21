import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    // テストをする対象のセットアップ
    // awaitが必要なので忘れないように
    await TestBed.configureTestingModule({
      declarations: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render application title as <h1>', async () => {
    // コンポーネントインスタンスの生成
    const element = fixture.nativeElement as HTMLElement;
    // DOMのアサーション
    expect(element.querySelector('h1')?.textContent).toContain(
      'My Application'
    );
  });
});
