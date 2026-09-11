import { LiveItem, LiveState } from '../../types';
import { INITIAL_LIVE_ITEMS } from '../../data/liveStreams';

export interface LiveEngineState {
  items: LiveItem[];
  manualOverrideActive: boolean;
  overrideState?: LiveState;
}

let activeEngineState: LiveEngineState = {
  items: [...INITIAL_LIVE_ITEMS],
  manualOverrideActive: false,
};

/**
 * Returns the currently broadcasted stream, upcoming stream, or latest replay
 */
export function getActiveBroadcast(): {
  primary: LiveItem | null;
  state: LiveState;
  upcoming: LiveItem[];
  replays: LiveItem[];
} {
  const currentItems = activeEngineState.items;

  // 1. Search for an active LIVE broadcast
  const liveItem = currentItems.find((item) => item.state === 'LIVE');
  const upcomingItems = currentItems.filter((item) => item.state === 'UPCOMING');
  const replayItems = currentItems.filter((item) => item.state === 'REPLAY');

  if (liveItem) {
    return {
      primary: liveItem,
      state: 'LIVE',
      upcoming: upcomingItems,
      replays: replayItems,
    };
  }

  // 2. If no LIVE broadcast, return next UPCOMING
  if (upcomingItems.length > 0) {
    return {
      primary: upcomingItems[0],
      state: 'UPCOMING',
      upcoming: upcomingItems.slice(1),
      replays: replayItems,
    };
  }

  // 3. If no upcoming, return latest REPLAY
  if (replayItems.length > 0) {
    return {
      primary: replayItems[0],
      state: 'REPLAY',
      upcoming: [],
      replays: replayItems.slice(1),
    };
  }

  // 4. Fallback
  return {
    primary: null,
    state: 'UNAVAILABLE',
    upcoming: [],
    replays: [],
  };
}

/**
 * Allows the admin to simulate or toggle stream status (LIVE, UPCOMING, REPLAY)
 */
export function setEditorialStreamState(itemId: string, newState: LiveState) {
  activeEngineState.items = activeEngineState.items.map((it) => {
    if (it.id === itemId) {
      return { ...it, state: newState };
    }
    // If setting to LIVE, ensure others aren't concurrently marked LIVE
    if (newState === 'LIVE' && it.state === 'LIVE') {
      return { ...it, state: 'REPLAY' };
    }
    return it;
  });
}
