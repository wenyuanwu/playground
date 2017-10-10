# file = open("test.txt", "r")
# for line in file.readlines():
# 	print(line)

def _main_calculation(N, K, p_list):
	window = first_window(K, p_list)
	start_idx = 0 
	end_idx = K - 1
	for i in range(N - K + 1):
		if i == 0:
			output(window["inc"], window["dec"])
			continue
		# doesn't account for N == 1	
		if(p_list[start_idx] > p_list[start_idx +1]):
			window["dec"][0] -= 1
		if (p_list[start_idx] < p_list[start_idx +1]):
			window["inc"][0] -= 1
		if window["inc"] and window["inc"][0] == 0:
			window["inc"].pop(0)
		if window["dec"] and window["dec"][0] == 0:
			window["dec"].pop(0)	
		start_idx += 1

		if(p_list[end_idx] < p_list[end_idx -1]):
			if (p_list[end_idx + 1] < p_list[end_idx]):
				window["dec"][-1] += 1
			if (p_list[end_idx + 1] > p_list[end_idx]):
				window["inc"].append(2)
		if(p_list[end_idx] > p_list[end_idx -1]):
			if (p_list[end_idx + 1] > p_list[end_idx]):
				window["inc"][-1] += 1
			if (p_list[end_idx + 1] < p_list[end_idx]):
				window["dec"].append(2)
		end_idx += 1

		output(window["inc"], window["dec"])	

def first_window(K, p_list):
	increasing_range_len = []
	decreasing_range_len = []
	length = 1
	for i in range(1,K):
		if p_list[i] == p_list[i -1]:
			length = 1
			continue
		else:
			length += 1
		
		if (p_list[i] - p_list[i-1]) *(p_list[i + 1] - p_list[i]) <=0 or (length > 1 and i == K-1):
			if (p_list[i] - p_list[i-1]) > 0:
				increasing_range_len.append(length)
			else:
				decreasing_range_len.append(length)

			length = 1

	return {"inc": increasing_range_len, "dec": decreasing_range_len}

def output(arr1, arr2):
	increasing_subrange = helper(arr1)
	decreasing_subrange = helper(arr2)
	print (increasing_subrange - decreasing_subrange)

def helper(arr):
	sum = 0 
	for i in arr:
		sum += sub_helper(i)
	return sum 

def sub_helper(int):
	return int * (int - 1) / 2 		

def get_input():
	file_name = input("Please provide the file name:")
	with open(file_name, "r") as f:
		f_arr = f.readlines()
		N_K_arr = f_arr[0].split()
		N = int(N_K_arr[0])
		K = int(N_K_arr[1])
		p_list_arr = f_arr[1].split()
		p_list = list(map(int, p_list_arr))
	return {"N": N, "K": K, "p_list": p_list}

def run_suite():
	print('-' * 34)
	input_dict = get_input()
	_main_calculation(input_dict["N"], input_dict["K"], input_dict["p_list"])
	
def main():
	run_suite()
	print("Goodbye!")

if __name__ == '__main__':
	main()