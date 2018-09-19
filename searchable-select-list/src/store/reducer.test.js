import reducer from './reducer';

describe('Reducer', () => {
  describe('when passed no state', () => {
    let output;
    beforeEach(() => {
      output = reducer();
    });

    it('should return an object.', () => {
      expect(output).toBeDefined();
    });

    it('should return output.activeId = null.', () => {
      expect(output.activeId).toEqual(null);
    });

    it('should return output.data = { results: [] }.', () => {
      expect(output.data).toEqual({ results: [] });
    });

    it('should return output.error = null.', () => {
      expect(output.error).toEqual(null);
    });

    it('should return output.isLoading = false.', () => {
      expect(output.isLoading).toEqual(false);
    });

    it('should return output.searchTerm = ""', () => {
      expect(output.searchTerm).toEqual('');
    });
  });

  describe('when passed an action = { type: "CHANGE_SEARCH_TERM", payload: "wolverine" }', () => {
    let output;
    const action = { type: 'CHANGE_SEARCH_TERM', payload: 'wolverine' };
    beforeEach(() => {
      output = reducer(null, action);
    });

    it('should return output.isLoading = true.', () => {
      expect(output.isLoading).toEqual(true);
    });

    it('should return output.searchTerm = "wolverine".', () => {
      expect(output.searchTerm).toEqual('wolverine');
    });
  });

  describe('when passed a state = { activeId: 1, data: { results: [1,2,3] }, searchTerm: "wolverine" }', () => {
    let output;
    const state = { activeId: 1, data: { results: [1,2,3] }, searchTerm: "wolverine" };

    describe('and an action = { type: "CLEAR_SEARCH_TERM" }', () => {
      const action = { type: 'CLEAR_SEARCH_TERM' };

      beforeEach(() => {
        output = reducer(state, action);
      });

      it('should return output.activeId = null.', () => {
        expect(output.activeId).toEqual(null);
      });

      it('should return output.data = { results: [] }.', () => {
        expect(output.data).toEqual({ results: [] });
      });

      it('should return output.searchTerm = ""', () => {
        expect(output.searchTerm).toEqual('');
      });
    });
  });

  describe('when passed an action = { type: "SET_ACTIVE_ID", payload: 1 }', () => {
    let output;
    const action = { type: 'SET_ACTIVE_ID', payload: 1 };

    beforeEach(() => {
      output = reducer(null, action);
    });

    it('should return output.activeId = 1.', () => {
      expect(output.activeId).toEqual(1);
    });
  });

  describe('when passed an action = { type: "SEARCH_FAILED", payload: "an error message" }', () => {
    let output;
    const action = { type: 'SEARCH_FAILED', payload: 'an error message' };

    beforeEach(() => {
      output = reducer(null, action);
    });

    it('should return output.error = "an error message".', () => {
      expect(output.error).toEqual('an error message');
    });
  });

  describe('when passed a state = { isLoading: true, data: { results: [4,5,6] }, error: "some other error" }', () => {
    let output;
    const state = { isLoading: true, data: { results: [4,5,6] }, error: 'some other error' };

    describe('and an action = { type: "SEARCH_SUCCESS", payload: { results: [1,2,3] } }', () => {
      const action = { type: 'SEARCH_SUCCESS', payload: { results: [1,2,3] } };

      beforeEach(() => {
        output = reducer(null, action);
      });

      it('should return output.isLoading = false.', () => {
        expect(output.isLoading).toEqual(false);
      });

      it('should return output.data = { results: [1,2,3] }.', () => {
        expect(output.data).toEqual({ results: [1,2,3] });
      });

      it('should return output.error = null.', () => {
        expect(output.error).toEqual(null);
      });
    });
  });
});