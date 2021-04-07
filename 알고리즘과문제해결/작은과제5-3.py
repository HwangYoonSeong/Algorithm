parent = dict()
rank = dict()


def find(vertice):
    if parent[vertice] != vertice:
        parent[vertice] = find(parent[vertice])
    return parent[vertice]


def union(vertice1, vertice2):
    root1 = find(vertice1)
    root2 = find(vertice2)
    if root1 != root2:
        if rank[root1] > rank[root2]:
            parent[root2] = root1
        else:
            parent[root1] = root2
        if rank[root1] == rank[root2]:
            rank[root2] += 1


def make_set(vertice):
    parent[vertice] = vertice
    rank[vertice] = 0


def kruskal(graph):
    for vertice in graph['vertices']:
        make_set(vertice)
    minimum_spanning_tree = set()
    edges = list(graph['edges'])
    edges.sort()
    for edge in edges:
        weight, vertice1, vertice2 = edge
        if find(vertice1) != find(vertice2):
            union(vertice1, vertice2)
            minimum_spanning_tree.add(edge)
    return sorted(minimum_spanning_tree)


graph = {
    'vertices': ['A', 'B', 'C',
                 'D', 'E', 'F',
                 'G', 'H', 'I',
                 'J'],
    'edges': set([
        (5, 'A', 'B'),
        (3, 'A', 'G'),
        (2, 'A', 'J'),
        (6, 'A', 'I'),
        (5, 'B', 'A'),
        (5, 'B', 'D'),
        (1, 'B', 'C'),
        (2, 'B', 'G'),
        (1, 'C', 'B'),
        (2, 'C', 'D'),
        (7, 'C', 'E'),
        (3, 'C', 'G'),
        (5, 'D', 'B'),
        (2, 'D', 'C'),
        (9, 'D', 'E'),
        (9, 'E', 'D'),
        (7, 'E', 'C'),
        (6, 'E', 'G'),
        (8, 'E', 'F'),
        (8, 'F', 'E'),
        (4, 'F', 'G'),
        (1, 'F', 'H'),
        (3, 'G', 'A'),
        (2, 'G', 'B'),
        (3, 'G', 'C'),
        (5, 'G', 'E'),
        (4, 'G', 'F'),
        (7, 'G', 'H'),
        (6, 'G', 'J'),
        (1, 'H', 'F'),
        (7, 'H', 'G'),
        (3, 'H', 'J'),
        (9, 'H', 'I'),
        (6, 'I', 'A'),
        (8, 'I', 'J'),
        (9, 'I', 'H'),
        (2, 'J', 'A'),
        (6, 'J', 'G'),
        (3, 'J', 'H'),
        (8, 'J', 'I'),

    ])
}
print(kruskal(graph))
