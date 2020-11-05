#/usr/bin/env python3

def sum_common_prefix_length(s):
    sum_of_lengths = 0
    for i in range(len(s)):
        prefix = s[:i]
        suffix = s[i:]

        sum_of_lengths += len(find_longest_common_prefix(suffix, s))

    return sum_of_lengths


def find_longest_common_prefix(s1, s2):
    i = j = 0
    while i < len(s1) and j < len(s2):
        if s1[i] != s2[j]:
            break
        i += 1
        j += 1

    return s1[:i]


print(sum_common_prefix_length('abcabcd'))
