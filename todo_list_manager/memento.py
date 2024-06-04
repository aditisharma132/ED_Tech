class Memento:
    def __init__(self, state):
        self._state = state

    def get_state(self):
        return self._state

class Caretaker:
    def __init__(self):
        self._mementos = []
        self._current = -1

    def save(self, state):
        memento = Memento(state)
        if self._current != len(self._mementos) - 1:
            self._mementos = self._mementos[:self._current + 1]
        self._mementos.append(memento)
        self._current += 1

    def undo(self):
        if self._current <= 0:
            raise Exception("No more undos")
        self._current -= 1
        return self._mementos[self._current].get_state()

    def redo(self):
        if self._current >= len(self._mementos) - 1:
            raise Exception("No more redos")
        self._current += 1
        return self._mementos[self._current].get_state()
