import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedUiModule } from '@ayzer-app/shared-ui/src/shared-ui.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [SharedUiModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title in toolbar', () => {
    const titleSpan = fixture.debugElement.query(By.css('mat-toolbar > span'));
    const el = titleSpan.nativeElement;
    expect(el.textContent).toEqual(component.title);
  })

  it('should have "primary" type color in toolbar attr', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar.attributes['color']).toEqual('primary');
  })
});
