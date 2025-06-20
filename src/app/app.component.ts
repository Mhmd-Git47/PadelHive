import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'tournament_website';

  ngAfterViewInit(): void {
    const config = {
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'bubble' },
          onHover: { enable: true, mode: 'grab' },
          resize: true,
        },
        modes: {
          bubble: { distance: 200, size: 15, duration: 2, opacity: 0.8 },
          grab: { distance: 140, links: { opacity: 0.6 } },
        },
      },
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#4ade80',
          distance: 180,
          enable: true,
          opacity: 0.15,
          width: 1.5,
          triangles: {
            enable: true,
            color: '#10b981',
            opacity: 0.05,
          },
        },
        move: {
          enable: true,
          speed: 0.5,
          warp: true,
          outModes: { default: 'out' },
        },
        number: { density: { enable: true, area: 1000 }, value: 35 },
        opacity: {
          value: 0.6,
          animation: { enable: true, speed: 0.8, opacity_min: 0.2 },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 1, size_min: 0.5 },
        },
      },
      detectRetina: true,
    };

    // @ts-ignore
    tsParticles.load('tsparticles', config);
  }
}
