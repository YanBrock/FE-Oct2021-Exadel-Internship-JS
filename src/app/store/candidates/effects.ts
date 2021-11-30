import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidatesService } from "../../services/candidates.service";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import {
  loadCandidatesList,
  loadCandidatesListFail,
  loadCandidatesListSuccess,
  selectCandidateFromServer, selectCandidateFromServerFail, selectCandidateFromServerSuccess,
} from './actions';

@Injectable()
export class CandidatesEffects {

  loadCandidatesList$ = createEffect(() => this.actions$.pipe(
      ofType(loadCandidatesList.type),
      mergeMap(({ filters }) =>this.candidatesService.loadCandidates(filters)
        .pipe(
          map(candidatesList => loadCandidatesListSuccess({ candidatesList })),
          catchError(() => of(loadCandidatesListFail({ message: 'Loading candidates list failed' })))
        )
      )
    )
  );

  selectCandidate$ = createEffect(() => this.actions$.pipe(
    ofType(selectCandidateFromServer.type),
    mergeMap(({ id }) => this.candidatesService.selectCandidate(id)
      .pipe(
        map(selectedCandidate => selectCandidateFromServerSuccess({ selectedCandidate })),
        catchError(() => of(selectCandidateFromServerFail({ message: 'Selecting candidate failed' })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private candidatesService: CandidatesService
  ) { }
}
