---
lang: zh-CN
title: 排序算法
date: 2023-07-16 10:36:23
permalink: /data-structure/sorting-algorithms/
description: 页面的描述
---
# 2.排序算法

以下将详细介绍常见排序算法（冒泡排序、选择排序、插入排序、快速排序、归并排序、堆排序）在 Java、Python、Go 和 JavaScript 中的实现，同时进行算法分析以及空间复杂度、时间复杂度和排序稳定性的对比。

### 1. 冒泡排序（Bubble Sort）

#### 算法分析
- **原理**：重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来，直到整个数列有序。
- **时间复杂度**：平均和最坏情况为 $O(n^2)$，最好情况（数组已经有序）为 $O(n)$。
- **空间复杂度**：$O(1)$，只需要常数级的额外空间。
- **稳定性**：稳定排序算法。

#### Java 实现
```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        swapped := false
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        if!swapped {
            break
        }
    }
}

func main() {
    arr := []int{64, 34, 25, 12, 22, 11, 90}
    bubbleSort(arr)
    fmt.Println(arr)
}
```

#### JavaScript 实现
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));
```

### 2. 选择排序（Selection Sort）

#### 算法分析
- **原理**：在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾，以此类推，直到所有元素均排序完毕。
- **时间复杂度**：无论最好、最坏还是平均情况，时间复杂度都是 $O(n^2)$。
- **空间复杂度**：$O(1)$，只需要常数级的额外空间。
- **稳定性**：不稳定排序算法。

#### Java 实现
```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

arr = [64, 25, 12, 22, 11]
print(selection_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func selectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIndex := i
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIndex] {
                minIndex = j
            }
        }
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    }
}

func main() {
    arr := []int{64, 25, 12, 22, 11}
    selectionSort(arr)
    fmt.Println(arr)
}
```

#### JavaScript 实现
```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));
```

### 3. 插入排序（Insertion Sort）

#### 算法分析
- **原理**：将未排序数据插入到已排序序列的合适位置。
- **时间复杂度**：平均和最坏情况为 $O(n^2)$，最好情况（数组已经有序）为 $O(n)$。
- **空间复杂度**：$O(1)$，只需要常数级的额外空间。
- **稳定性**：稳定排序算法。

#### Java 实现
```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

arr = [12, 11, 13, 5, 6]
print(insertion_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func insertionSort(arr []int) {
    n := len(arr)
    for i := 1; i < n; i++ {
        key := arr[i]
        j := i - 1
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

func main() {
    arr := []int{12, 11, 13, 5, 6}
    insertionSort(arr)
    fmt.Println(arr)
}
```

#### JavaScript 实现
```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));
```

### 4. 快速排序（Quick Sort）

#### 算法分析
- **原理**：选择一个基准值，将数组分为两部分，小于基准值的元素放在左边，大于基准值的元素放在右边，然后递归地对左右两部分进行排序。
- **时间复杂度**：平均情况为 $O(n log n)$，最坏情况（数组已经有序）为 $O(n^2)$。
- **空间复杂度**：平均情况为 $O(log n)$，最坏情况为 $O(n)$。
- **稳定性**：不稳定排序算法。

#### Java 实现
```java
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
        quickSort(arr, 0, n - 1);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

arr = [10, 7, 8, 9, 1, 5]
print(quick_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func quickSort(arr []int, low, high int) {
    if low < high {
        pi := partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)
    }
}

func partition(arr []int, low, high int) int {
    pivot := arr[high]
    i := low - 1
    for j := low; j < high; j++ {
        if arr[j] < pivot {
            i++
            arr[i], arr[j] = arr[j], arr[i]
        }
    }
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1
}

func main() {
    arr := []int{10, 7, 8, 9, 1, 5}
    quickSort(arr, 0, len(arr)-1)
    fmt.Println(arr)
}
```

#### JavaScript 实现
```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] === pivot) {
            middle.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(middle, quickSort(right));
}

let arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr));
```

### 5. 归并排序（Merge Sort）

#### 算法分析
- **原理**：将数组分成两个子数组，分别对两个子数组进行排序，然后将排好序的子数组合并成一个最终的有序数组。
- **时间复杂度**：无论最好、最坏还是平均情况，时间复杂度都是 $O(n log n)$。
- **空间复杂度**：$O(n)$，需要额外的空间来合并数组。
- **稳定性**：稳定排序算法。

#### Java 实现
```java
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        int n = arr.length;
        mergeSort(arr, 0, n - 1);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [12, 11, 13, 5, 6, 7]
print(merge_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func mergeSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }
    mid := len(arr) / 2
    left := mergeSort(arr[:mid])
    right := mergeSort(arr[mid:])
    return merge(left, right)
}

func merge(left, right []int) []int {
    result := make([]int, 0, len(left)+len(right))
    i, j := 0, 0
    for i < len(left) && j < len(right) {
        if left[i] <= right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)
    return result
}

func main() {
    arr := []int{12, 11, 13, 5, 6, 7}
    sortedArr := mergeSort(arr)
    fmt.Println(sortedArr)
}
```

#### JavaScript 实现
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(arr));
```

### 6. 堆排序（Heap Sort）

#### 算法分析
- **原理**：利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
- **时间复杂度**：无论最好、最坏还是平均情况，时间复杂度都是 $O(n log n)$。
- **空间复杂度**：$O(1)$，只需要常数级的额外空间。
- **稳定性**：不稳定排序算法。

#### Java 实现
```java
public class HeapSort {
    public static void heapSort(int[] arr) {
        int n = arr.length;

        // 构建大顶堆
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // 一个个交换元素
        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // 重新调整堆
            heapify(arr, i, 0);
        }
    }

    private static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        heapSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

#### Python 实现
```python
def heap_sort(arr):
    def heapify(arr, n, i):
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2

        if l < n and arr[l] > arr[largest]:
            largest = l

        if r < n and arr[r] > arr[largest]:
            largest = r

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)

    n = len(arr)

    # 构建大顶堆
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # 一个个交换元素
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

    return arr

arr = [12, 11, 13, 5, 6, 7]
print(heap_sort(arr))
```

#### Go 实现
```go
package main

import "fmt"

func heapSort(arr []int) {
    n := len(arr)

    // 构建大顶堆
    for i := n/2 - 1; i >= 0; i-- {
        heapify(arr, n, i)
    }

    // 一个个交换元素
    for i := n - 1; i > 0; i-- {
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    }
}

func heapify(arr []int, n, i int) {
    largest := i
    l := 2*i + 1
    r := 2*i + 2

    if l < n && arr[l] > arr[largest] {
        largest = l
    }

    if r < n && arr[r] > arr[largest] {
        largest = r
    }

    if largest != i {
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
    }
}

func main() {
    arr := []int{12, 11, 13, 5, 6, 7}
    heapSort(arr)
    fmt.Println(arr)
}
```

#### JavaScript 实现
```javascript
function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        if (largest!== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    const n = arr.length;

    // 构建大顶堆
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 一个个交换元素
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

let arr = [12, 11, 13, 5, 6, 7];
console.log