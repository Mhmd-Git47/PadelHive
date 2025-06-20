import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tournament-detail-overview',
  imports: [CommonModule, MatIconModule],
  templateUrl: './tournament-detail-overview.component.html',
  styleUrl: './tournament-detail-overview.component.css',
})
export class TournamentDetailOverviewComponent
  implements OnInit, AfterViewInit
{
  @Input() tournament: any;
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;

  formatList: { icon: string; title: string; text: string }[] = [];
  participantList: { title: string; count: number }[] = [];
  rankingList: { rank: number; prize: number }[] = [];

  // info
  informationList = [
    'Format: Round Robin - each team plays against all other teams.',
    'Matches are played as best of 3 sets.',
    'Points: Win = 3 points, Loss = 0 points.',
    'Top teams advance to the knockout stage based on points.',
    'In case of a tie, head-to-head result and set difference will be used as tiebreakers.',
    'Teams must arrive 15 minutes before their scheduled match.',
    'Fair play and sportsmanship are mandatory throughout the tournament.',
  ];

  // prizeClaimList = [
  //   'Prize claims must be completed within 24 hours of the end of the tournament otherwise risk penalty of the prize.',
  //   'Claims can take up to 72 hours to be processed.',
  // ];

  rulesList = [
    'Please be respectful to your host and other participants. If any malicious behavior is reported, you will be removed from the tournament.',
    'Please be on time for your registration and for the actual tournament. You (and your team) will be disqualified on no-show.',
    'You and all of your teammates must be registered to qualify for the event.',
    'You can play in this tournament only if your registered and in-game names match, otherwise you will be disqualified.',
  ];

  constructor() {}

  ngOnInit(): void {
    this.formatList = [
      {
        icon: 'sports_tennis', // Changed to racket icon
        title: 'Game',
        text: 'Padel',
      },
      {
        icon: 'schedule',
        title: 'Date',
        text: new Date(this.tournament.startTime).toLocaleDateString(),
      },
      {
        icon: 'location_on',
        title: 'Location',
        text: 'Padel Square',
      },
      {
        icon: 'people',
        title: 'Participants',
        text: '16 Teams',
      },
    ];

    this.participantList = [
      { title: 'Registered', count: this.tournament.registeredParticipants },
      // { title: 'Available Slots', count: 15 },
    ];

    this.rankingList = [
      { rank: 1, prize: 300 },
      { rank: 2, prize: 200 },
      // { rank: 3, prize: 250 },
    ];
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/animations/prizes.json', 
    });
  }

  getSuffix(rank: number): string {
    if (rank === 1) return 'st';
    if (rank === 2) return 'nd';
    if (rank === 3) return 'rd';
    return 'th';
  }
}
